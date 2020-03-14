import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            siteUrl
            defaultTitle: title
            defaultDescription: description
            defaultBanner: banner
            headline
            siteLanguage
            ogLanguage

            twitter
            facebook
            menu {
              label
              path
            }
            author {
              name
              photo
            }
            contact {
              address
              phone_no
              mail_address
            }
          }
        }
      }
    `
  );

  return site;
};

export default useSiteMetadata;
