export default {
  async fetch(request: Request, env: { ASSETS: { fetch: (req: Request) => Promise<Response> } }): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'www.sugarwaxbrazilian.com') {
      url.hostname = 'sugarwaxbrazilian.com';
      return Response.redirect(url.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
