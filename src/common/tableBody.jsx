import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) return column.content();
    return _.get(item, column.path);
  }
  CreateKey(item, column) {
    return item._id + (column.path || column.key);
  }
  render() {
    return (
      <tbody>
        {this.props.data.map(item => (
          <tr key={item._id}>
            {this.props.columns.map(column => (
              <td key={this.CreateKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
