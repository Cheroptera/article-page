import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ArticleDetails = () => {
  const { _id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`localhost:3000/articles/${_id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Whoopsie daisy');
        }
        return res.json();
      })
      .then((data) => {
        setArticleDetails(data);
        // Assuming you have the "paid" property in the fetched data
        if (data.paid) {
          alert('This content costs money.');
          navigate('/'); // Redirect to homepage or any other appropriate page
        }
      })
      .catch((error) => {
        console.error(error);
        navigate('/404');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [_id, navigate]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <p>This is a details page</p>
      {articleDetails && articleDetails.body && (
        <div>
          {articleDetails.body.map((item, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={id}>{item.html}</p>
          ))}
        </div>
      )}
    </>
  );
};
