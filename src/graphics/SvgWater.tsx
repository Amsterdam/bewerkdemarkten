import React, { Component } from "react";

export default class SvgWater extends Component<{ color: string, invert?: boolean, position: { x: number, y: number } }> {
    render() {
        return <svg
            x={this.props.position.x}
            y={this.props.position.y}
            width="12"
            height="12"
            viewBox="0 0 248.151 248.151"
            version="1.1"
            id="water">
            <defs id="defs2" />
            <metadata id="metadata5">
            </metadata>
            <g id="water-group">
                <path
                    style={{
                        fill: this.props.color,
                        stroke: this.props.color,
                        strokeWidth: 0.4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeOpacity: 1
                    }}
                    d="M134.475,8.551c-6.8-11.6-14-11.2-20.8,0c-31.2,46.4-78.4,116-78.4,150.8c0,24.4,10,46.8,26,62.8s38.4,26,62.8,26
                    c24.4,0,46.8-10,62.8-26s26-38.4,26-62.8C212.875,124.151,165.675,54.951,134.475,8.551z M188.075,198.951
                    c-6.4,10.4-15.6,19.6-26.8,26c-5.2,2.8-11.6,1.2-14.4-4c-3.2-5.6-1.2-12,4-14.8c8-4.4,14.4-10.8,19.2-18.4
                    c4.8-7.6,7.6-16.4,8-25.6c0.4-6,5.2-10.4,11.2-10c6,0.4,10.4,5.2,10,11.2C198.475,176.151,194.475,188.151,188.075,198.951z"
                    id="path1048-5" />
            </g>
        </svg>
    }
}