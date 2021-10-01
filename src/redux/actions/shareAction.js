import Constants from "../constants";
import Share from "react-native-share";
import RNFetchBlob from "rn-fetch-blob";
import * as mime from 'react-native-mime-types';

export const shareAction = (url, name) => (dispatch, getState) => {
  dispatch(sharePending()); //start loading

  console.log(`"${url}"`, `"${name}"`);

  RNFetchBlob.config({
    fileCache: true,
  })
    .fetch("GET", url)
    .then((resp) => {
      RNFetchBlob.fs.readFile(resp.data, "base64").then(
        async (data) => {
          const mimeType = mime.lookup(url); //use mime to get mime type of file
          console.log("Mime Type", mimeType);
          await Share.open({
            title: "React Native Share",
            // message: "Share",
            //share base64 file
            //url: "data:<data_type>/<file_extension>;base64,<base64_data>"
            url: `data:${mimeType};base64,` + data, // you can use urls to share multiple files at same time
            subject: `Share ${name}.pdf`, //subject for email
            filename: name,
            type: mimeType,
            showAppsToView: true,
          })
            .then((res) => {
              //dispatch share on success
              //stop loading
              dispatch(shareSuccess(res.data));
              console.log("SUCCESS", res)
            }
            )
            .catch((error) => {
              //dispatch share on failure
              //stop loading
              dispatch(shareSuccess(error));
              console.log("ERROR", error)
            })
          }
      );
    });
};

const shareSuccess = (data) => (dispatch) => {
  dispatch({
    type: Constants.SHARE_SUCCESS,
    payload: data,
  });
};
const shareFailure = (error) => (dispatch) => {
  dispatch({
    type: Constants.SHARE_FAILED,
    payload: error,
  });
};
const sharePending = () => (dispatch) => {
  dispatch({
    type: Constants.SHARE_PENDING,
  });
};
