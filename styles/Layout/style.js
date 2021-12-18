import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fffff",
      marginLeft: 10,
    },
  },
  link:{
    all: 'unset',
    cursor: 'pointer'
  },
  logo:{
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  grow:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'right',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "end",
    justifyContent: 'center', 
    alignSelf: 'center',  
    backgroundColor: '#203040',
    padding: 20,
    color: 'white',
    marginTop: 20,
  },
});

export default useStyle;
