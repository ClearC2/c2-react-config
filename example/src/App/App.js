import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {fromJS} from 'immutable'
import {css} from 'glamor'
import {Table, Column} from '../../Layout/components/C2Table'
import FuzeProjectTask from '../FuzeProjectTask'
import FuzeProjectTaskActions from '../FuzeProjectTaskActions'
import FuzeProjectTaskComments from '../FuzeProjectTaskComments'

const TableName = 'FuzeProjectTasks'

const hideHead = css({
  '& td:nth-child(1)': {
    width: 30
  },
  '& > tbody > tr.-expanded': {
    background: '#fff'
  },
  '& > tbody > tr.inactive-expanded': {
    background: '#fff'
  }
})

const VisibleContext = React.createContext()

function VisibilityTracker ({children}) { // eslint-disable-line
  const observer = React.useRef()
  const element = React.useRef()
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    observer.current = new window.IntersectionObserver(entries => {
      const {intersectionRect} = entries[0]
      const {top, left, bottom, right} = intersectionRect
      const isVisible = [top, bottom, left, right].some(Boolean)
      setVisible(() => isVisible)
    })
    observer.current.observe(element.current)
    return () => observer.current.disconnect()
  }, [])
  return (
    <VisibleContext.Provider value={visible}>
      <span ref={element}>{children}</span>
    </VisibleContext.Provider>
  )
}

function useIsVisible() {
  return React.useContext(VisibleContext)
}

function useVisibility(element) {
  const observer = React.useRef()
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    observer.current = new window.IntersectionObserver(entries => {
      const {intersectionRect} = entries[0]
      const {top, left, bottom, right} = intersectionRect
      const isVisible = [top, bottom, left, right].some(Boolean)
      setVisible(isVisible)
    })
    observer.current.observe(element.current)
    return () => observer.current.disconnect()
  }, [element])
  return visible
}

function Title ({row}) { // eslint-disable-line
  const element = React.useRef()
  const isVisible = useVisibility(element)
  return (
    <span ref={element} style={{color: isVisible ? 'black' : 'transparent'}}>
      {row.status === 'IN PROGRESS' ? <strong>{row.display_name}</strong> : row.display_name}
    </span>
  )
}

function Titlee ({row}) { // eslint-disable-line
  const isVisible = useIsVisible()
  return isVisible ? (
    row.status === 'IN PROGRESS' ? (
      <strong>{row.display_name}</strong>
    ) : (
      row.display_name
    )
  ) : (
    <React.Fragment />
  )
}

export default class FuzeProjectTasksTable extends Component {
  static propTypes = {
    data: PropTypes.object,
    projectId: PropTypes.string
  }
  renderTaskForm = ({row}) => {
    return (
      <div style={{marginBottom: 15}}>
        <FuzeProjectTask {...this.props} task={fromJS(row)} projectId={this.props.projectId} />
      </div>
    )
  }
  getRowClassName = row => {
    const {status} = row
    const inActive = ['inactive', 'in active'].includes(String(status).toLowerCase())
    return inActive ? 'inactive' : ''
  }

  render() {
    return (
      <Table
        getTable={table => {
          this.table = table
        }}
        id={TableName}
        data={this.props.data.toJS()}
        rowId='task_inst_id'
        onEmpty={<div className='text-center'>No results found</div>}
        className={`table sortable table-bordered expand-table ${hideHead} table-striped`}
        onExpand={this.renderTaskForm}
        rowClassName={this.getRowClassName}
      >
        <Column
          id='display_name'
          header='Task'
          headerClassName='col-xs-7'
          cell={row => <Title row={row} foo='testing a thing' />}
        />
        <Column id='user_assigned_name' headerClassName='col-xs-1' header='Assigned To' />
        <Column
          id='comments'
          header='Comments'
          cellClassName='col-xs-1'
          cell={row => <FuzeProjectTaskComments {...this.props} task={row} />}
        />
        <Column
          id='status'
          headerClassName='col-xs-1'
          header='Status'
          cell={row => <span style={{color: row.status_color}}>{row.status}</span>}
        />
        <Column
          id='actions'
          headerClassName='col-xs-2'
          header='Actions'
          cell={row => <FuzeProjectTaskActions {...this.props} task={row} />}
        />
      </Table>
    )
  }
}
