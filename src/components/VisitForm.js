import React, { Component } from 'react'

export class VisitForm extends Component {
    render() {
        return (
            <div>
                <form class="form-horizontal">
                    <legend>Submit a New Visit</legend>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="selectbasic">Select Basic</label>
                        <div class="col-md-4">
                            <select id="selectbasic" name="selectbasic" class="form-control">
                                <option value="1">Option one</option>
                                <option value="2">Option two</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="textinput">Text Input</label>
                        <div class="col-md-4">
                            <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md" />
                            <span class="help-block">help</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="radios">Inline Radios</label>
                        <div class="col-md-4">
                            <label class="radio-inline" for="radios-0">
                                <input type="radio" name="radios" id="radios-0" value="1" checked="checked" />
                                            1
    </label>
                            <label class="radio-inline" for="radios-1">
                                <input type="radio" name="radios" id="radios-1" value="2" />
                                    2
    </label>
                            <label class="radio-inline" for="radios-2">
                                <input type="radio" name="radios" id="radios-2" value="3" />
                                        3
    </label>
                            <label class="radio-inline" for="radios-3">
                                <input type="radio" name="radios" id="radios-3" value="4" />
                                            4
    </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="prependedcheckbox">Prepended Checkbox</label>
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <input type="checkbox" />
                                </span>
                                <input id="prependedcheckbox" name="prependedcheckbox" class="form-control" type="text" placeholder="placeholder" />
                            </div>
                            <p class="help-block">help</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="textarea">Text Area</label>
                        <div class="col-md-4">
                            <textarea class="form-control" id="textarea" name="textarea">default text</textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="singlebutton">Single Button</label>
                        <div class="col-md-4">
                            <button id="singlebutton" name="singlebutton" class="btn btn-primary">Button</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default VisitForm
