import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { useTheme } from "next-themes";

export default {
  logo: () => {
    const { resolvedTheme } = useTheme();

    switch (resolvedTheme) {
      case "dark":
        return <img src="/img/logo-dark.webp" alt="Logo do projeto Escola." />;
      case "light":
        return <img src="/img/logo-light.webp" alt="Logo do projeto Escola." />;
    }
  },
  project: {
    link: "https://github.com/senac-escola",
  },
  docsRepositoryBase: "https://github.com/senac-escola/docs/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Escola.",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
        "https://senac-escola-docs.vercel.app/" +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`),
      thumbnail = "/img/thumbnail.png";

    return (
      <>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />

        <title>{frontMatter.title || "Escola."}</title>
        <meta
          name="description"
          content={
            frontMatter.description ||
            "Documentação da WebApp de gestão escolar desenvolvida para o curso de Análise e Desenvolvimento de Sistemas do Senac"
          }
        />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={frontMatter.title || "Escola."} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Documentação da WebApp de gestão escolar desenvolvida para o curso de Análise e Desenvolvimento de Sistemas do Senac"
          }
        />
        <meta property="og:image" content={thumbnail} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={frontMatter.title || "Escola."} />
        <meta
          name="twitter:description"
          content={
            frontMatter.description ||
            "Documentação da WebApp de gestão escolar desenvolvida para o curso de Análise e Desenvolvimento de Sistemas do Senac"
          }
        />
        <meta name="twitter:image" content={thumbnail} />
      </>
    );
  },
  search: { placeholder: "Pesquisar..." },
  editLink: {
    text: "Editar esta página no GitHub →",
  },
  sidebar: { defaultMenuCollapseLevel: 1 },
  footer: {
    text: (
      <a href="https://github.com/senac-escola/.github/blob/main/profile/LICENSE">
        Projeto sob licença GPL-3.0.
      </a>
    ),
  },
  toc: {
    backToTop: true,
  },
  /* banner: {
    key: "1.0-release",
    text: (
      <a href="https://senac-escola.vercel.app/" target="_blank">
        🎉 Projeto concluído no ar! Confira aqui →
      </a>
    ),
  }, */
};
