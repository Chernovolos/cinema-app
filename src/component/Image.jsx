import React from 'react';
import staticFallbackImage from "../assets/images/fallback-film-poster.jpg";

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
                src: this.props.fallbackSrc || staticFallbackImage,
                errored: true,
            });
        }
    };

    render() {
        const { src } = this.state;
        const {
            src: _1,
            fallbackSrc: _2,
            ...rest
        } = this.props;
        return (
            <img src={src}
                 onError={this.onError}
                 {...rest}
            />
        );
    }
}