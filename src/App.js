
import './App.css';
import Card from './components/card';
import DashboardTitle from './components/dashboard-title';
import Searchbar from './components/searchbar';
import Sidebar from './components/sidebar';
import Draggable from 'react-draggable';

function App() {
  let pic1 = ['pic1.png']
  let pic2 = ['pic2.png','pic3.png']
  let pic4 = ['pic4.png']
  return (
    <div className="App">
      <div className='sidebar'>
            <Sidebar />
      </div>
      <div className='main-board'>
        <div className='search-title'>
      <Searchbar />
        </div>
      <div className='dash-title'>
      <DashboardTitle />
      </div>
      <div className='display-row d-column'>
        <div className='cards-column'>
          <div>
            <span className='margin-right2'><img src="/a.png" alt=""  /></span> 
            <span className='status-text margin-right2'>To Do</span>
            <span className='count'>4</span>
          </div>
          <Card profile={['/1.png,/2.png,/3.png']} status={'low'} title={'Brainstorming'} description={"Brainstorming brings team members' diverse experience into play."} files={0} comments={10} />
          <Card profile={['1.png,2.png,3.png']} status={'High'} title={'Research'} description={"User research helps you to create an optimal product for users."} files={3} comments={10} />
          <Card profile={['1.png,2.png,3.png']} status={'High'} title={'Wireframes'} description={"Low fidelity wireframes include the most basic content and visuals."} files={13} comments={10} />
        </div>
        <div className='cards-column'>
        <div>
            <span className='margin-right2'><img src="/Ellipse 9.png" alt="" /></span>
            <span className='status-text margin-right2'>on Progress</span>
            <span className='count'>3</span>
          </div>
          <Card  profile={['1.png,2.png,3.png']} status={'low'} title={'Onboarding Illustrations'} description={""} images={pic1} files={15} comments={14}/>
          <Card profile={['1.png,2.png,3.png']}  status={'low'} title={'Moodboard'} description={""} files={10} images={pic2} comments={9}/>
        </div>
        <div className='cards-column'>
        <div>
            <span className='margin-right2'><img src="/Ellipse 11.png" alt="" /></span>
            <span className='status-text margin-right2'>Done</span>
            <span className='count'>2</span>
          </div>
          <Card  profile={['/1.png,/2.png,/3.png']} status={'Completed'} title={'Mobile App Design'} description={""} images={pic4} files={15} comments={12} />
          <Card  profile={['/1.png,/2.png,/3.png']} status={'Completed'} title={'Design System'} description={"It just needs to adapt the UI from what you did before "} files={15} comments={12} />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
