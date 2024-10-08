import { useState } from "react"
import { useDispatch, useSelector} from "react-redux";

import { postAdded } from "./postSlice";
import { selectAllUsers } from "../user/userSlice";


const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const [usersId, setUsersId] = useState('')




    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setUsersId(e.target.value)

    const onSavePostClicked = () => {
        if(title && content && usersId){
            dispatch(postAdded(title,content, usersId))
            setTitle('')
            setContent('')
            // setUsersId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(usersId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

  return (
    <section>
        <h2>Add a new post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            
            />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={usersId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>
            <label htmlFor="postContent">Content</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save post</button>
        </form>
    </section>
  )
}

export default AddPostForm