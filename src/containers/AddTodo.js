import { Component } from "react";
import { View, TouchableOpacity, TextInput, Ionicons } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  state = {
    text: " ", //an empty string for the text input to stay empty.
  };
  addTodo = (text) => {
    //redux store
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          onChangeText={
            //to update the text from text input when a user types
            (text) => this.setState({ text })
          }
          value={this.state.text}
          placeholder="E.g. Create New Video"
          style={{
            borderWidth: 1,
            borderColor: "#f2f2e1",
            backgroundColor: "#eaeaea",
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: "#eaeaea",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: "#de9595", padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo)

    /* This (state = {
    text: " ", 
  }) is just an empty string for the text input to stay empty. Next, we have to update
the text from text input when a user types. 
This is done using onChangeText(
onChangeText={(text) => this.setState({ text })}
 value={this.state.text}
)) where the
state is updated with the text entered by the user

/** Once the user submits the todo it must be updated to our store. For this, we use a
helper method, connect, from react-redux.
In addition, the connect helper method should be passed with the component that is
going to get connected to the Redux store. In this case, use AddTodo:
*/
