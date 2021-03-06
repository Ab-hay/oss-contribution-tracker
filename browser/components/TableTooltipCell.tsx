/* Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import * as React from 'react';
import ReactTooltip = require('react-tooltip');

interface Props {
  notes: any;
}
interface State {
  show: any;
}
export default class TooltipCell extends React.Component<
  Partial<Props>,
  State
> {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }
  render() {
    return (
      <div
        className="center"
        onMouseEnter={() => {
          ReactTooltip.show();
        }}
        onMouseLeave={() => {
          ReactTooltip.hide();
        }}
      >
        <a data-tip={this.props.notes} className="im-pointer">
          <i className="fa fa-pencil-square" />
        </a>
      </div>
    );
  }
}
