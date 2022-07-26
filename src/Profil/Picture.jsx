// upload d'une photo de profil (Finir la connexion au back)

import React from "react";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  picture: {
    display: "flex",
    marginTop: "10px",
    marginLeft: "25%",
    marginBottom: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px"

    },

  },


}));

export default function Picture() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const classes = useStyles();

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={classes.picture}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "125px",
          width: "125px",

        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "115%",
            height: "115%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "50%",
          }}
        />
        <AddAPhotoIcon style={{ paddingLeft: "60px" }} />
      </div>


    </div>
  );
}


