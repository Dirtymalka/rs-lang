import React, { Component } from 'react';
import './modal.scss';
import { Checkbox } from './CheckBox';
import { Button } from '../../shared/button';

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWord: false,
            isSentence: false,
            isMeaning: false,
        };
    }

    checkboxHandle = (property) => {
        this.setState(prev => ({
            [property]: !prev[property]
        }));
    }

    checkSettings = () => {
        const settingsValues = Object.values(this.state);
        if (!settingsValues.includes(true)) {
            alert('choose main settings')
            return;
        }
        this.props.closeModal();
    }

    render() {
        console.log(this.state)
        return (
            <div id="openModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Button className="close-modal close" onClick={this.props.closeModal} title="×" />
                        </div>
                        <div className="modal-body">
                            <div className="main-settings">
                                <h3>Main settings</h3>
                                <Checkbox text="learn by word" onClick={() => this.checkboxHandle('isWord')} arg="isWord" />
                                <Checkbox text="learn on offer" onClick={() => this.checkboxHandle('isSentence')} />
                                <Checkbox text="learn by the meaning" onClick={() => this.checkboxHandle('isMeaning')} />
                            </div>
                            <div className="additional-settings">
                                <h3>Additional settings</h3>
                                <Checkbox text='Show transcription' />
                                <Checkbox text='Show picture' />
                            </div>
                            {/* <Checkbox text='Show translation' />
                            <Checkbox text='Show example sentences' />
                            <Checkbox text='Show offer translation' /> */}
                        </div>
                        <Button className="close-modal-ok button" onClick={this.checkSettings} title="OK" />
                    </div>
                </div>
            </div>
        );
    }
}
