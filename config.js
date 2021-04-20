module.exports = {
  siteTitle: 'Sam Huynh',
  siteUrl: 'https://samhwang.github.io',
  siteDescription: 'Online profile of Sam Huynh.',
  manifest: {
    name: 'Sam Huynh Website',
    short_name: 'Sam Huynh',
    start_url: '/',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    display: 'standalone',
    icon: 'src/assets/img/website-icon.png',
  },
  personalInformation: {
    firstName: 'Sam',
    lastName: 'Huynh',
    socialLinks: [
      {
        name: 'Github',
        url: 'https://github.com/samhwang',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/samhwang2112/',
      },
      {
        name: 'PDF',
        url: '/files/Resume_SamHuynh.pdf',
      }
    ],
    email: 'samhwang2112.dev@gmail.com',
    address: 'Melbourne, Victoria, Australia',
    experience: [
      {
        title: 'Full Stack Software Developer',
        companyName: 'Hertz Australia',
        duration: 'Oct 2019 - Present',
        description: [
          'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
          "Built new feature into Hertz's booking API, including but not limited to integrations with insurance partners and franchisee, error monitoring, reporting rental analytics and tracking systems, using GraphQL (Apollo), MongoDB, NodeJS (Express), EJS, ReactJS, Sentry and web sockets on AWS Serverless platform, with a dashboard on Elastic Beanstalk.",
        ],
        technologies: [
          'Front-end: React, EJS, jQuery, Bootstrap, Material UI, Jest, Storybook, sockets.io',
          'Back-end: PHP7 (Wordpress), NodeJS (Express)',
          'HTML5, CSS3 and CSS pre-processors like SASS and LESS',
          'GraphQL (Apollo) and REST API',
          'Docker containers & docker-compose',
          'Database: MySQL & MongoDB',
          'Serverless architecture and websockets',
          'AWS (Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3)',
          'CI/CD: GitHub Actions pipeline and GitHub Container Registry',
          'Project management using JIRA and Confluence',
          'Error reporting and monitoring: Sentry, Dashbird',
        ],
      },
      {
        title: 'Web Application Developer',
        companyName: 'Bonntech Business Solutions',
        duration: 'May 2019 - Oct 2019',
        description: [
          'Built the base framework, along with its own create and update script to speed up the initial setup for future projects.',
          "Assisted in setting up Bonntech's central Git repository and private Composer Packagist for internal projects and libraries.",
        ],
        technologies: [
          'PHP 7.3, using CodeIgniter framework and Composer package manager with self-hosted Packagist',
          'MySQL database management and data modelling',
          'HTML5, CSS, JavaScript (jQuery, Bootstrap, Datatables, and AJAX)',
          'Apache server configurations',
          'Built containerized development environments with Docker',
        ],
      },
      {
        title: 'Software Developer',
        companyName: 'Classcom',
        duration: 'Jan 2019 - Apr 2019',
        description: [
          'Collaborated on building new core features of the ClassCom project',
          'Created automated test and build scripts and participated in code reviews in a bi-weekly release schedule.',
        ],
        technologies: [
          'JavaScript, using the Meteor full stack framework (with Node/Express for backend processing, Blaze for templating, CSS pre-processing with LESS)',
          'Automated test scripting with CucumberJS and Mocha.',
          'MongoDB database and data modelling.',
          'REST APIs',
          'Project management using Azure DevOps',
        ],
      },
      {
        title: 'PHP Developer Intern',
        companyName: 'Psych Press',
        duration: 'Jun 2017 - Sep 2017',
        description: [
          'Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis.',
        ],
        technologies: [
          'PHP 7, using CodeIgniter, Laravel and Moodle framework.',
          'JavaScript (AJAX, jQuery, Bootstrap, D3js and ChartJS) and CSS (MaterializeCSS)',
          'Microsoft SQL Server Database',
          'Migration from Microsoft servers to Amazon Web Services EC2 Linux instances',
        ],
      },
      {
        title: 'Web Developer',
        companyName: 'Mint n Co. Accessories',
        duration: 'Oct 2015 - Feb 2016',
        description: [
          'Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.',
          'Provided regular maintenance to ensure 99.9% site availability.',
        ],
        technologies: [
          'CPanel hosting control panel for Apache server',
          'PHP using the Wordpress framework and WooCommerce e-commerce plugin',
          'MySQL database',
          'JavaScript (jQuery, Bootstrap)',
          'Paypal Gateway API',
        ],
      },
      {
        title: 'PHP Developer',
        companyName: 'Right Left Communication',
        duration: 'Sep 2014 - Feb 2015',
        description: [
          'Developed, supported, monitored and maintained 4 websites for different clients from various industries.',
        ],
        technologies: [
          'CPanel hosting control panel for Apache server',
          'PHP using the Joomla framework',
          'JavaScript (jQuery, Bootstrap)',
          'MySQL database',
        ],
      },
    ],
    education: [
      {
        institute: 'Navitas Professionals',
        degree: 'Professional Year Program in Computer Science',
        major: 'incl. Cert IV in Business',
        duration: 'Oct 2016 - Oct 2017',
      },
      {
        institute: 'RMIT University',
        degree: 'Bachelor of Information Technology',
        major: '',
        duration: 'Oct 2012 - Dec 2015',
      },
    ],
    projects: [
      {
        title: 'My GitHub code repository',
        description:
          'The host of my many curious projects, from setting up a custom firmware to my keyboard and my own shell configs, to testing and learning new programming languages and techniques.',
        url: 'https://github.com/samhwang',
      },
      {
        title: 'My GitHub.io page',
        description:
          'This site was hosted on GitHub Pages, built with the Gatsby framework for ReactJS.',
        url: 'https://samhwang.github.io',
      },
      {
        title: 'Pi-Hole',
        description:
          'A self-hosted DNS server that will act as an ad black-hole and can be easily installed on any Raspberry Pi (hence the name, Pi-Hole), or any computer running Linux. To maintain stable and seamless connection between dropouts, I have also set up 2 of them, and sync the ad blocking lists together using a sync script.',
        url: 'https://pi-hole.net/',
      },
    ],
    skills: [
      {
        title: 'Professional Proficiency',
        description: [
          'Backend: PHP 7, NodeJS',
          'Frontend: JavaScript (jQuery, React, TypeScript), HTML5, CSS, LESS and SASS',
          'Databases and data modelling with SQL (MySQL, SQLite, MS SQL, PostgreSQL) and MongoDB',
          'Server configuration with Apache and NGINX',
          'Containerize applications (traditional, and microservices) with Docker',
          'Frameworks: Meteor, Gatsby, Symfony, Express',
          'Package management and build tools: Composer, NPM, Yarn, Babel, Webpack',
          'Version control tools with Git',
          'Continuous Integration and Continuous Delivery with CircleCI, GitHub Actions & GitHub Container Registry',
          'Amazon Web Services tool: EC2, Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3, CloudFront',
          'Project Management tools (JIRA, Confluence, Trello, Asana, Azure DevOps)',
          'Microsoft Office and similar Google tools',
          'Adobe Creative Suite (Photoshop, Lightroom, Bridge)',
        ],
      },
      {
        title: 'Also Learning',
        description: [
          'Golang',
          'Cloud Deployment using Kubernetes to AWS, DigitalOcean and Google Cloud',
          'Infrastructure Automation (Terraform, Ansible and Packer)',
        ],
      },
    ],
  },
};
