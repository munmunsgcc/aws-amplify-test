import React from "react";
import { SignUp } from "aws-amplify-react";

const countryDialCode = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+345",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+379",
  "+380",
  "+381",
  "+382",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+537",
  "+590",
  "+591",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+872",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998"
];

export default class CustomSignUp extends SignUp {
  constructor(props) {
    super(props);
    this.signUpFields = [
      {
        label: "Username",
        key: "username",
        required: true,
        placeholder: "Username"
      },
      {
        label: "Email",
        key: "email",
        required: true,
        placeholder: "Email",
        type: "email"
      },
      {
        label: "Password",
        key: "password",
        required: true,
        placeholder: "Password",
        type: "password"
      },
      {
        label: "Phone Number",
        key: "phone_number",
        placeholder: "Phone Number",
        required: true
      }
    ];
  }

  showComponent() {
    return (
      <div>
        <label>Sign Up</label>
        <div>
          {this.signUpFields.map(
            ({ label, required, type, key, placeholder }) => {
              return (
                <div key={key}>
                  <label>
                    {label}
                    {required === true ? "*" : ""}
                  </label>
                  {key === "phone_number" ? (
                    <div key={key}>
                      <select
                        name="dial_code"
                        defaultValue="+1"
                        onChange={this.handleInputChange}
                      >
                        {countryDialCode.map(dialCode => {
                          return (
                            <option key={dialCode} value={dialCode}>
                              {dialCode}
                            </option>
                          );
                        })}
                      </select>
                      <input
                        type="tel"
                        id="phone_line_number"
                        key="phone_line_number"
                        name="phone_line_number"
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                  ) : (
                    <input
                      placeholder={placeholder}
                      type={type}
                      name={key}
                      key={key}
                      onChange={this.handleInputChange}
                    ></input>
                  )}
                </div>
              );
            }
          )}
        </div>
        <div>
          <button type="button" onClick={this.signUp}>
            Sign Up
          </button>
          <div
            onClick={() => {
              this.changeState("signIn");
            }}
          >
            Sign In
          </div>
        </div>
      </div>
    );
  }
}