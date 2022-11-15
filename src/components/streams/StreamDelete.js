import React from "react";
import history from "../../history";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import { deleteStream } from "../../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <div>
                <button onClick={() => this.props.deleteStream(id)} class="ui button negative">Delete</button>
                <Link to="/" class="ui button">Cancel</Link>
            </div>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);