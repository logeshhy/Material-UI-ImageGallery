import React, { Component } from "react";
import { GridList, GridListTile, IconButton } from "@material-ui/core";
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import imagesList from "./imagesList";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "10px"
  },
  gridList: {
    width: 500,
    height: 750,
    overflowY: "auto"
  }
};

export class GridListImage extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList cols={3}>
          {imagesList.map(tile => (
            <GridListTile
              key={tile.id}
              title={tile.title}
              actionIcon={<IconButton>aksdhgf</IconButton>}
            >
              <img src={tile.src} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridListImage;
