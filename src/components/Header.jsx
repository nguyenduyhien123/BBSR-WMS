import { ReactComponent as IconUser} from '../assets/icon/user.svg';
export const Header = (props) => {
        return <header class="header">
          <div class="logo-container">
            <span class="logo-text">BBSR</span>
            <span class="logo-subtext">WMS</span>
          </div>
          <main class="main-content">
              <nav class="nav-menu">
                <div class="nav-item">주문관리</div>
                <div class="nav-item">입고관리</div>
                <div class="nav-item">출고관리</div>
                <div class="nav-item">재고관리</div>
                <div class="nav-item">기준정보</div>
              </nav>
              <aside class="user-info">
                <div class="user-details">
                  <div class="user-profile">
                    <IconUser></IconUser>
                    <div class="user-name">바보사랑3 님 (bbsr3)</div>
                  </div>
                  <button class="logout-button">로그아웃</button>
                </div>
              </aside>
          </main>
        </header>
}
