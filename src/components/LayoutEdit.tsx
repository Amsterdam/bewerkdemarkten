import React, { Component } from "react";
import { Button, Col, Input, Row, Select } from "antd"
import { MarketLayout } from "../models";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
export default class LayoutEdit extends Component<{ index: number, layout: MarketLayout, changed?: (layout: MarketLayout | undefined, position: [number, number], add?: boolean) => void, position: [number, number] }> {
    readonly state: { layout: MarketLayout } = {
        layout: {
            title: "",
            landmarkTop: "",
            landmarkBottom: "",
            lots: [],
            class: ""
        }

    }

    updatePage(layout: MarketLayout) {
        // Tell the parent component this page has changed.

        if (this.props.changed) {
            this.props.changed(layout, this.props.position)
        }

        this.setState({
            layout
        })
    }

    componentDidMount() {
        this.setState({layout: this.props.layout})
    }

    render() {
        const { index } = this.props
        return <Row gutter={[8, 8]}>
            <Col>
                <Input
                    id={`market_${index}_title`}
                    placeholder="Rij titel"
                    value={this.state.layout.title}
                    onChange={(e: any) => {
                        this.updatePage({ ...this.state.layout, title: e.target.value })
                    }} />
            </Col>
            <Col>
                <Input
                    id={`market_${index}_landmarkTop`}
                    placeholder="Herkeningspunt start"
                    value={this.state.layout.landmarkTop}
                    onChange={(e: any) => {
                        this.updatePage({ ...this.state.layout, landmarkTop: e.target.value })
                    }} />
            </Col>
            <Col>
                <Input
                    id={`market_${index}_landmarkBottom`}
                    placeholder="Herkenningspunt eind"
                    value={this.state.layout.landmarkBottom}
                    onChange={(e: any) => {
                        this.updatePage({ ...this.state.layout, landmarkBottom: e.target.value })
                    }} />
            </Col>
            <Col>

                <Select value={this.state.layout.class || "block-left"} onChange={(e: string) => {
                    this.updatePage({ ...this.state.layout, class: e })
                }}>
                    <Select.Option key="0" value="block-left">Links</Select.Option>
                    <Select.Option key="1" value="block-right">Rechts</Select.Option>
                </Select>
            </Col>
            <Col>
                <Button
                    danger
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => {
                        if (this.props.changed) {
                            this.props.changed(undefined, this.props.position)
                        }
                    }}
                />
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => {
                        if (this.props.changed) {
                            const _newLayout: MarketLayout = {
                                title: "",
                                class: "block-left",
                                landmarkBottom: "",
                                landmarkTop: "",
                                lots: []
                            }
                            this.props.changed(_newLayout, [this.props.position[0], this.props.position[1] + 1], true)
                        }
                    }}
                />
            </Col>
        </Row>
    }
}