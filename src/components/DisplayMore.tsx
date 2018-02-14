import * as React from 'react'

export class DisplayMore extends React.Component<{style: any, children: any }, {showMore: boolean}> {
  constructor(props: any) {
    super(props)
    this.state = {
      showMore: false 
    }
  }

  public render() {

    return (
        <div style={this.props.style}>
          {(this.state.showMore) && this.props.children}
          <div className={this.state.showMore ? 'display-more-button':'display-less-button'} style={{display: 'inline-block', cursor: 'pointer'}} onClick={() => this.setState({showMore: !this.state.showMore})}> 
            {this.state.showMore ? 'Read Less' : ' Read More'}
          </div>
        </div>
    )
  }
}
