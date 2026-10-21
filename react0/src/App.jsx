import  { useState } from 'react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      
      <nav className="navbar">
        <div className="logo">TaskFlow</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features">المميزات</a>
          <a href="#pricing">الأسعار</a>
          <a href="#contact">تواصل</a>
        </div>
        <button className="btn btn-primary nav-btn">جرب</button>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>TaskFlow</h1>
          <p>اداره مشاريع</p>
          <div className="hero-buttons">
            <button className="btn btn-secondary">اعرف المزيد</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="" alt="TaskFlow Preview" />
        </div>
      </section>

      
      <section id="features" className="features">
        <h2>مميزات التطبيق</h2>
        <div className="cards-grid">
          <div className="card feature-card">
            <span className="icon"></span>
            <h3>سرعة الإنجاز</h3>
            <p>تتبع المهام.</p>
          </div>
          <div className="card feature-card">
            <span className="icon"></span>
            <h3>تعاون الفريق</h3>
            <p>شارك المهام .</p>
          </div>
          <div className="card feature-card">
            <span className="icon"></span>
            <h3>تقارير دقيقة</h3>
            <p>تحليل شامل</p>
          </div>
        </div>
      </section>
      
      <section id="pricing" className="pricing">
        <h2>الأسعار</h2>
        <div className="cards-grid">
          <div className="card pricing-card">
            <h3>المبتدئ</h3>
            <p className="price">مجاناً</p>
            <button className="btn btn-secondary">اشترك</button>
          </div>
          <div className="card pricing-card featured-plan">
            <span className="badge">الأكثر شعبية</span>
            <h3>المحترف</h3>
            <p className="price"> 10$ شهرياً</p>
            <button className="btn btn-primary">اشترك</button>
          </div>
          <div className="card pricing-card">
            <h3>الشركات</h3>
            <p className="price"> 20$ شهرياً</p>
            <button className="btn btn-secondary">اشترك</button>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <p>© 2026 TaskFlow. جميع الحقوق محفوظة.</p>
        <div className="footer-links">
          <a href="#">الخصوصية</a>
          <a href="#">الشروط والأحكام</a>
        </div>
      </footer>
    </div>
  );
}

     