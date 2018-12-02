import * as React from "react";

interface Props {
  page: number;
  sort: string;
}

export default class SortButtons extends React.Component<Props> {

  public render() {
    const p: Props = this.props;

    return (
      <div className="btn-group" role="group" aria-label="Sort by">
        {this.sortButtons(p)}
      </div>
    );
  }

  private sortButtons = (p: Props): JSX.Element[] => {
    const sortKeys: Array<{key: string, displayname: string}> 
      = [ {key: "created_at", displayname: "新着"}, 
          {key: "like", displayname: "★の多い順"}];
    const items: JSX.Element[] = [];

    sortKeys.forEach((pair)=>{
      items.push(
        <button type="button"
          onClick={this.clickHandler(p.page, pair.key)}
          className={"btn " + ((pair.key === p.sort) ? "btn-light" : "btn-outline-light")}
          key={pair.key}>{pair.displayname}</button>
        )
      }
    )
    return items;
  }

  private clickHandler(page: number, sort: string){
    return () => {window.location.href = `?p=${page}&sort=${sort}`;}
  }
}
