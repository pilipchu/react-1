import article from './data/article.json';
import stats from './data/stats.json';
import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics stats={stats} title="Main Statistics" />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
