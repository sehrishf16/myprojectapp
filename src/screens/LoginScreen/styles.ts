import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e73df",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#f1f3f6",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 14,
    color: "#333",
  },

  loginButton: {
    backgroundColor: "#4e73df",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  forgotText: {
    marginTop: 15,
    textAlign: "center",
    color: "#4e73df",
    fontSize: 13,
  },
  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f1f3f6",
  borderRadius: 12,
  paddingHorizontal: 15,
  marginBottom: 15,
},

passwordInput: {
  flex: 1,
  paddingVertical: 12,
  fontSize: 14,
  color: "#333",
},

eyeIcon: {
  paddingLeft: 10,
},
});