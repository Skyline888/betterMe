import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './repo.module.scss'

export const RepoItem = React.memo(({ repo }) => {

    const { name, stargazers_count, updated_at, html_url } = repo;

    return (
      <Card className={styles.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name: {name}
            </Typography>
            <Typography gutterBottom variant="h8" component="h2">
              Stars: {stargazers_count}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Last update: {updated_at}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    );
});

export default RepoItem;

// <div className={styles.repo}>
//   <div className={styles.repoHeader}>
//     <div className={styles.repoHeaderName}>{name}</div>
//     <div className={styles.repoHeaderStars}>Stars: {stargazers_count}</div>
//   </div>
//   <div className={styles.repoLastCommit}>Last commit: {updated_at}</div>
//   <a href={html_url} className={styles.repoLink}>Link: {html_url}</a>
// </div>
