import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

function PostDetailsContent({ id, state, fullWidth }) {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        message: '',
        notify: false
    });
    const [likes, setLikes] = useState({});
    const [dislikes, setDislikes] = useState({});
    const [replyTo, setReplyTo] = useState(null);

    const nameInputRef = useRef(null);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    }

    const handleCheckboxChange = () => {
        setNewComment((prev) => ({ ...prev, notify: !prev.notify }));
    };

    const formatTime = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        return new Date(date).toLocaleDateString('en-US', options);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentTime = formatTime(new Date());

        const newEntry = {
            id: comments.length + 1, ...newComment,
            time: currentTime,
            likes: 0,
            dislikes: 0,
            replies: [],
            isReply: replyTo !== null,
        };

        if (replyTo) {
            setComments(
                comments.map((comment) =>
                    comment.id === replyTo ? { ...comment, replies: [...comment.replies, newEntry] } : comment
                )
            );
        } else {
            setComments([...comments, newEntry]);
        }

        // For Mail Notification
        // if (newComment.notify) {

        // }

        setNewComment({ name: '', email: '', message: '', notify: false });
        setReplyTo(null);
    };


    const hasUserInteracted = (id, type) => {
        const interactions = JSON.parse(localStorage.getItem('interactions')) || {};
        return interactions[id]?.includes(type);
    }

    const recordInteraction = (id, type) => {
        const interactions = JSON.parse(localStorage.getItem('interactions')) || {};

        if (!interactions[id]) {
            interactions[id] = [];
        }

        if (type === 'remove_like') {
            interactions[id] = interactions[id].filter(i => i !== 'like');
        } else if (type === 'remove_dislike') {
            interactions[id] = interactions[id].filter(i => i !== 'dislike');
        } else if (!interactions[id].includes(type)) {
            interactions[id].push(type);
        }

        localStorage.setItem('interactions', JSON.stringify(interactions));
    };

    const handleLike = (e, id) => {
        e.preventDefault();
        if (hasUserInteracted(id, 'like')) {
            return;
        }
        if (hasUserInteracted(id, 'dislike')) {
            setDislikes({ ...dislikes, [id]: (dislikes[id] || 1) - 1 });
            recordInteraction(id, 'remove_dislike');
        }
        setLikes({ ...likes, [id]: (likes[id] || 0) + 1 });
        recordInteraction(id, 'like');
    };

    const handleDislike = (e, id) => {
        e.preventDefault();
        if (hasUserInteracted(id, 'dislike')) {
            return;
        }
        if (hasUserInteracted(id, 'like')) {
            setLikes({ ...likes, [id]: (likes[id] || 1) - 1 });
            recordInteraction(id, 'remove_like');
        }
        setDislikes({ ...dislikes, [id]: (dislikes[id] || 0) + 1 });
        recordInteraction(id, 'dislike');
    };

    useEffect(() => {
        localStorage.removeItem('interactions');
    }, []);

    const handleReply = (id) => {
        setReplyTo(id);
        nameInputRef.current.focus();
    };

    useEffect(() => {
        if (state) {
            localStorage.setItem('lastPost', JSON.stringify(state));
        } else {
            const savedPost = JSON.parse(localStorage.getItem('lastPost'));
            if (!savedPost) {
                navigate('/blog');
            }
        }
    }, [state, navigate])

    const post = state || JSON.parse(localStorage.getItem('lastPost'));

    if (!post) {
        return navigate('/blog');
    }

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className={fullWidth ? 'col-md-12' : 'col-xl-9 col-lg-8'}>
                <article className="single-blog-post">
                    <div className="post-thumbnail">
                        <Carousel activeIndex={index} onSelect={handleSelect} fade>
                            <Carousel.Item className="single-post-thumbnail">
                                <img className="img-responsive" src="/assets/img/blog/single-post/1.jpg" alt="" />
                                <Carousel.Caption>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="single-post-thumbnail">
                                <img className="img-responsive" src="/assets/img/blog/single-post/2.jpg" alt="" />
                                <Carousel.Caption>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="single-post-thumbnail">
                                <img className="img-responsive" src="/assets/img/blog/single-post/3.jpg" alt="" />
                                <Carousel.Caption>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="single-post-content">
                        <div className="post-content-inner">
                            <h3 className="post-title">{post.title}</h3>
                            <ul className="meta-info">
                                <li><i className="fa fa-user"></i>admin</li>
                                <li><i className="fa fa-calendar"></i>jul 24, 2024</li>
                                <li><i className="fa fa-tag"></i>game</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi odit quam, numquam rerum, libero, harum iste quaerat dolores laborum error ratione minima iure qui! Dolorum nemo magnam debitis ipsam, quos hic rerum amet in quasi veritatis quia error voluptas animi eius ut perferendis repellat odio nesciunt cupiditate esse. Atque assumenda provident porro, consequuntur. Ipsa quisquam odit, perspiciatis illo doloremque?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non quae provident impedit nobis officiis ipsum necessitatibus reiciendis natus voluptates, et? Id reiciendis consectetur, maiores sunt reprehenderit quam magnam fuga illum rerum. Commodi molestiae autem non ad obcaecati illo sed, fugit maxime odio reiciendis nesciunt quia laborum porro, odit, ratione.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat alias fugit consequuntur tempora cupiditate, eveniet neque fugiat ratione quasi a reiciendis, accusantium dolorum harum voluptas nostrum esse libero soluta inventore sunt. Iusto possimus, dolore reiciendis esse recusandae aliquid veniam.</p>
                            <ul className="post-object-list">
                                <li>Stay Hungry, Stay Foolish.</li>
                                <li>I am trying to find myself. Sometimes that's not easy</li>
                                <li>Life isn't about finding yourself, Life is about creating yourself.</li>
                                <li>If you don’t ask, You won’t get.</li>
                                <li>Be great, Be bold, Be grand.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga tempora voluptates, odio quisquam sapiente vitae veniam in rem esse iusto dolores pariatur dicta.</p>
                            <blockquote className="blockquote">
                                <p>"Really, when I look back on it, I wouldn’t change a thing. I mean, it was so important for me to lose everything because I found out what the most important thing is ... to be true to yourself. Ultimately, that’s what’s gotten me to this place. I don’t live in fear. I’m free. I have no secrets and I know I’ll always be OK, because no matter what, I know who I am."</p>
                                <span>~Ellen DeGeneres</span>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deleniti impedit possimus voluptate enim, rem, fugiat ad ab, ipsam placeat, officia dolorum? Rerum voluptatum molestiae quasi magnam, veritatis expedita qui, laudantium aut, ullam similique eius adipisci odio, itaque ducimus natus.</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="post-content-description-inner">
                                        <img src="/assets/img/blog/1.jpg" alt="" />
                                        <p className="thumbnail-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="post-content-description-inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus autem, earum reiciendis magni cumque nobise. Magni, eius! In architecto perferendis reiciendis molestias dolores nesciunt incidunt sunt libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus autem, earum reiciendis magni cumque nobis, non asperiores quidem dignissimos minus. Accusantium hic esse recusandae provident laudantium cum reprehenderit facilis corporis vero aspernatur, quasi quidem qui a dolore.</p>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perferendis modi architecto praesentium ad illum corporis. Fugiat expedita, alias qui corporis animi iusto pariatur deleniti non veniam aperiam quidem id. Exercitationem fuga, harum voluptates porro minima vitae accusamus quam unde?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis vero deleniti quaerat quia. Nam, impedit, minima! Voluptatibus commodi ullam praesentium placeat, sapiente cumque. Sint at neque, eveniet, consequatur dignissimos provident dolor natus perferendis ratione unde temporibus. Quia, repudiandae, voluptate.</p>
                            <div className="post-tag">
                                <a href="#">design</a>
                                <a href="#">game</a>
                                <a href="#">robotics</a>
                            </div>
                            <div className="post-footer">
                                <div className="like-post">
                                    <p>Like:</p>
                                    <a className="like-count" href="#">
                                        <i className="fa fa-heart-o"></i>
                                        <span className="heart-number">0</span>
                                    </a>
                                </div>
                                <div className="share-post">
                                    <ul className="share-site-list">
                                        <li>share:</li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className={`comment-section ${fullWidth ? 'full-width' : ''}`}>
                    <div className="blog-comment-section">
                        <h4 className="comment-section-title">
                            comments
                            <span>
                                {
                                    comments.reduce((total, comment) => total + 1 + (comment.replies ? comment.replies.length : 0), 0)
                                }
                            </span>
                        </h4>
                        {comments.length != 0 ? (
                            <ul className="media-list">
                                {comments.map(comment => (
                                    <li key={comment.id} className="media">
                                        <div className="media-left">
                                            <img src="/assets/img/avatars/user.png" alt="User avatar" />
                                        </div>
                                        <div className="media-body">
                                            <h5>{comment.name}</h5>
                                            <p><i className="fa fa-calendar"></i> <span>{comment.time}</span></p>
                                            <p>{comment.message}</p>
                                            <div className="comment-actions">
                                                <ul className="post-like">
                                                    <li>
                                                        <button onClick={(e) => handleLike(e, comment.id)} className={hasUserInteracted(comment.id, 'like') ? 'liked' : ''}>
                                                            <i className="fa fa-thumbs-o-up"></i>
                                                            <span>{likes[comment.id] || 0}</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={(e) => handleDislike(e, comment.id)} className={hasUserInteracted(comment.id, 'dislike') ? 'disliked' : ''}>
                                                            <i className="fa fa-thumbs-o-down"></i>
                                                            <span>{dislikes[comment.id] || 0}</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <button className="reply-link" onClick={() => handleReply(comment.id)}>reply <i className="fa fa-reply"></i></button>
                                            </div>
                                        </div>
                                        {/* comments replies */}
                                        {comment.replies && comment.replies.length > 0 && (
                                            <ul className="media-list replies">
                                                {comment.replies.map((reply) => (
                                                    <li key={reply.id} className="media reply-comment">
                                                        <div className="media-left">
                                                            <img src="/assets/img/avatars/user.png" alt="User avatar" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>{reply.name}</h5>
                                                            <p><i className="fa fa-calendar"></i> <span>{reply.time}</span></p>
                                                            <p>{reply.message}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className='noCommentMsg'>
                                <p>No comment yet. Be the first!</p>
                            </div>
                        )
                        }
                    </div>
                    <div className="blog-comment-form">
                        <h4>leave your comments</h4>
                        <div className="comment-form">
                            <form id="mini-comment-form" onSubmit={handleSubmit} autoComplete="off">
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <input ref={nameInputRef} type="text" name='name' className="form-control" value={newComment.name} onChange={handleInputChange} placeholder="name*" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" name='email' className="form-control" value={newComment.email} onChange={handleInputChange} placeholder="email*" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name='message' value={newComment.message} onChange={handleInputChange} placeholder="comments*"></textarea>
                                </div>
                                <div className="check-box">
                                    <label className="notifyCheckbox">
                                        <input type="checkbox" name="notify" onChange={handleCheckboxChange} checked={newComment.notify} id="check-box-l" />
                                        <span className="checkmark"></span>
                                        Keep me in touch in this conversation
                                    </label>
                                </div>
                                <button type="submit" className="button btn-white-left btn-white-bg">{replyTo ? 'Post Reply' : 'Post Comment'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetailsContent