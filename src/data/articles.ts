export interface Article {
   title: string;
   content: string;
   date: string;
   picture: string;
   link: string;
}

export const ARTICLES: Article[] = [
   {
      title: 'Optimize your website using Next.js and SSG',
      content: `Using Next.js, it is possible to upload sites whose pages have been statically generated very easily. To do this, you just have to develop your web page as a "template" and tell Next.js how to retrieve the data for each statically generated path.`,
      date: 'Friday, 9 Apr 2021',
      picture:
         'https://www.kanjisho.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fkanjisho%2Ff3de3644-30d5-4de5-bed9-cd182079249a_banner.png%3Fauto%3Dcompress%2Cformat&w=3840&q=75',
      link: 'https://www.kanjisho.com/devblog/optimize-your-website-using-next.js-and-ssg',
   },
   {
      title: 'Comment déployer votre back-end sur AWS Elastic Beanstalk avec Github Actions ?',
      content: `Mettre en place une architecture scalable pour votre back-end peut sonner comme un véritable challenge. Pour cause, la scalabilité d'une application est toujours présentée comme un problème difficile à surmonter : même si vous avez choisi les meilleures technologies pour votre projet, vous aurez des besoins croissants en ressources, une inconsistance de la demande et peut-être même des difficultés à assurer un uptime compétitif.`,
      date: 'Monday, 30 Nov 2020',
      picture:
         'https://res.cloudinary.com/forest2/image/fetch/w_1300,f_auto/https://images.ctfassets.net/18a90cmjmaj9/56VJLvFsCJUch1fpqh6ujF/9a13a932b568c6f98fbbdfac7d527ede/cover2.png',
      link: 'https://galadrim.fr/blog/comment-deployer-votre-back-end-sur-aws-elastic-beanstalk-avec-github-actions',
   },
   {
      title: 'Comment utiliser GitLab CI/CD pour améliorer votre flow de développement ?',
      content: `Lors du développement d'une application, il y a toujours une petite appréhension lors la mise en production. Cette petite voix qui vous dit "est-ce que mon code ne va rien casser ?" ou encore "est-ce que je suis sûr d'avoir passé tous les tests avant de push ?".`,
      date: 'Friday, 4 Sep 2020',
      picture:
         'https://res.cloudinary.com/forest2/image/fetch/w_1300,f_auto/https://images.ctfassets.net/18a90cmjmaj9/5cg25LlXj7xzL6wLD7DbmW/e17b24e91db969662283e5a80ca5208c/cover.png',
      link: 'https://galadrim.fr/blog/comment-utiliser-gitlab-ci-cd-pour-ameliorer-votre-flow-de-developpement',
   },
];
