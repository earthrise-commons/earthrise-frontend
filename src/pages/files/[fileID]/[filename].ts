import type { APIRoute } from "astro";
const apiUrl = import.meta.env.KIRBY_URL;
type ProxyFileParams = { fileID: string; filename: string };
export const GET: APIRoute = async ({ params }) => {
  const { fileID, filename } = params as ProxyFileParams;
  // derive external url from params
  console.log(params);

  const externalUrl = `${apiUrl}/@/file/${fileID}`;

  try {
    // 3. Fetch the file from the external server
    const externalResponse = await fetch(externalUrl);

    if (!externalResponse.ok) {
      return new Response(externalResponse.body, {
        status: externalResponse.status,
        statusText: externalResponse.statusText,
      });
    }

    const headers = new Headers();
    headers.set(
      "Content-Type",
      externalResponse.headers.get("Content-Type") || "application/octet-stream"
    );
    headers.set(
      "Content-Length",
      externalResponse.headers.get("Content-Length") || ""
    );
    headers.set(
      "Content-Disposition",
      externalResponse.headers.get("Content-Disposition") || "inline"
    );
    headers.set(
      "Cache-Control",
      externalResponse.headers.get("Cache-Control") || "public, max-age=3600"
    );

    // 6. Stream the file body back to the user.
    return new Response(externalResponse.body, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error(`[File Proxy Error] ${error}`);
    return new Response("An internal error occurred while proxying the file.", {
      status: 500,
    });
  }
};
