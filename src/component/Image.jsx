import React from 'react';
import fallbackImage from "../assets/images/fallback-film-poster.jpg";

export default class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: props.src,
            errored: false,
        };
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                src: this.props.fallbackSrc || fallbackImage,
                errored: true,
            });
        }
    };

    render() {
        const { src } = this.state;
        const {
            src: _1,
            fallbackSrc: _2 = fallbackImage,
            ...props
        } = this.props;

        return (
            <img src={src}
                 onError={this.onError}
                 {...props}
            />
        );
    }
}