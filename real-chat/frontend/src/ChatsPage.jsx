import PropTypes from 'prop-types';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    console.log('Username:', props.user.username);
    console.log('Secret:', props.user.secret);

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId='f838d70f-2761-496e-9e86-e4f950503da4'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;