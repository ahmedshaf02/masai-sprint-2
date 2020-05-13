import React from "react";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const { value } = this.props;
    return (
      <>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{value.id}</th>
          <th scope="col">{value.name}</th>
          <th scope="col">
            <img
              width="100"
              height="100"
              src={value.owner.avatar_url}
              alt={value.name}
            />
          </th>
          <th scope="col">
            <button
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
              style={{ margin: 10 }}
              className="btn btn-primary"
            >
              More details
            </button>
          </th>
        </tr>
        {this.state.show ? (
          <tr>
            <td colSpan="8">
              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Full Name:
                </span>{" "}
                {value.full_name}
              </span>

              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Language:
                </span>
                {value.language ? value.language : "NA"}
              </span>

              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Repo created date:
                </span>
                {value.created_at.substr(0, 10)}
              </span>

              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Last updated date:
                </span>
                {value.created_at.substr(0, 10)}
              </span>

              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Watchers Count:
                </span>
                {value.watchers_count}
              </span>

              <span style={{ marginRight: 8, marginLeft: 8 }}>
                <span style={{ fontWeight: "bold" }} className="text-primary">
                  Open-issues-count:
                </span>
                {value.open_issues_count}
              </span>

              <a
                href={value.html_url}
                target="_blank"
                className="btn btn-primary ml-2"
              >
                {" "}
                visit github page
              </a>
            </td>
          </tr>
        ) : (
          ""
        )}
      </>
    );
  }
}
