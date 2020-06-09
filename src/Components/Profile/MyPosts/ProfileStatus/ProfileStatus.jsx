import React from 'react';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: 'Red dead'
  }
 activateEditMode () {
  this.setState(
    {
      editMode: true,
      title: 'Read Dead Redemtion'
    });
  }
  
// setState - accинхронен
    // this.state.editMode = true;
  // this.forceUpdate();//говнокод
  deactivateEditMode () {
    this.setState(
      {
        editMode: false,
        title: 'Read Dead 2'
      });
    }
  render() {
    return (<div>
      {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        </div>
      }
      {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur = {this.deactivateEditMode.bind(this)} value={this.props.status} />
        </div>
      }
    </div>
    )
  }
}