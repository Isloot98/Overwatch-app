export const getPostsAndComments = async (req, res) => {
  try {
    const posts = await sql`
      SELECT
        posts.id,
        posts.username,
        posts.title,
        posts.textcontent,
        posts.media,
        posts.categoryid,
        comments.commentid,
        comments.commentusername,
        comments.commenttextcontent,
        comments.commentmedia
      FROM
        posts
      LEFT JOIN comments ON posts.id = comments.postid
    `;

    const postsWithComments = posts.rows.reduce((accumulator, row) => {
      const postId = row.id;
      if (!accumulator[postId]) {
        accumulator[postId] = {
          id: postId,
          username: row.username,
          title: row.title,
          textcontent: row.textcontent,
          media: row.media,
          categoryid: row.categoryid,
          comments: [],
        };
      }

      if (row.commentid) {
        accumulator[postId].comments.push({
          commentid: row.commentid,
          commentusername: row.commentusername,
          commenttextcontent: row.commenttextcontent,
          commentmedia: row.commentmedia,
        });
      }

      return accumulator;
    }, {});

    const postsData = Object.values(postsWithComments);
    res.status(200).json(postsData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
