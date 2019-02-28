import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },


  formControl: {
    margin: theme.spacing.unit,
    minWidth: 700,
    maxWidth: 900,

  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
 
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


class DeveloperList extends React.Component {
  state = {
    developer: [],
  };

  handleChange = event => {
    this.setState({ developer: event.target.value });
  };

  componentDidUpdate(){
    debugger
    if(this.state.developer.length>0){
      this.props.addCorrespondingDeveloper(this.state.developer)
      console.log('developer',this.state.developer)
    }
  }

  render() {
    const { classes ,developerList} = this.props;
    developerList.length &&developerList.map((developer )=> {
      console.log('developer',developer)
    })
    console.log(developerList)
    return (
      <div className='developerList' >
      {developerList.length&&
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Devlopers</InputLabel>
          <Select
            multiple
            value={this.state.developer}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
          {developerList.length && developerList.map((developer )=> (
              <MenuItem key={developer.name} value={developer.name}>
                <Checkbox checked={this.state.developer.indexOf(developer.name) > -1} />
                <ListItemText primary={developer.name+'  '+' ::'+' '+developer.email} />
              </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      }
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(DeveloperList);