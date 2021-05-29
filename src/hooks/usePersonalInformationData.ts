import { useStaticQuery, graphql } from 'gatsby';

export default function usePersonalInformationData() {
  const PersonalInfoQuery = graphql`
    query PersonalInfoQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
            address
            email
            socialLinks {
              name
              url
            }
            projects {
              title
              description
              url
            }
            education {
              institute
              degree
              major
              duration
            }
            experience {
              title
              companyName
              description
              duration
              technologies
            }
            skills {
              title
              description
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(PersonalInfoQuery);
  const { personalInformation } = data.site.siteMetadata;

  return personalInformation;
}
