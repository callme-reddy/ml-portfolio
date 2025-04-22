import React from "react";
import './App.css';  // or the path to your CSS file


export default function App() {
  return (
    <div className="bg-white text-gray-900 p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Aspiring Machine Learning Engineer</h1>
        <p className="mt-2 text-lg text-gray-600">
          Passionate about solving real-world problems through data and ML.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          Aspiring Machine Learning enthusiast seeking to leverage strong analytical,
          programming, and problem-solving skills to contribute to innovative ML projects
          and research. Eager to gain hands-on experience in applying machine learning
          algorithms and data analysis techniques to real-world challenges.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Programming:</strong> Python, SQL, C++, Java</li>
          <li><strong>Data Tools:</strong> Excel, Pandas, NumPy</li>
          <li><strong>Visualization:</strong> Tableau, Power BI, Matplotlib, Seaborn</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
          <li><strong>ML Tools:</strong> Scikit-Learn, TensorFlow, Kaggle</li>
          <li><strong>Big Data:</strong> Hadoop, Spark</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-bold">Suicide Rate Analysis</h3>
            <p>Predicted suicide rates using Random Forest. Tech: Python, Pandas, Matplotlib.</p>
          </div>
          <div>
            <h3 className="font-bold">Text Generation Using ML</h3>
            <p>Used Markov models and LSTM for coherent text generation.</p>
          </div>
          <div>
            <h3 className="font-bold">Loan Approval Prediction</h3>
            <p>Built a predictive model for loan approval using Python and Scikit-Learn.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Python Programming - NSDC</li>
          <li>DSA - Cipher Schools</li>
          <li>Data Analytics Simulation - Deloitte</li>
          <li>Software Engineering Simulation - EA</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Virtual Experience</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Electronic Arts: Proposed features, C++ class design, code optimization</li>
          <li>Deloitte: Data dashboard with Tableau, Excel analysis</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Competitive Programming</h2>
        <p className="mt-2">
          Solved 150+ SQL & Python problems on LeetCode with 85% accuracy.
          Active on HackerRank, Kaggle, Google Kick Start.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Open Source Contributions</h2>
        <p className="mt-2">
          Contributed to Plotly Dash and DataKind projects. Shared datasets on Kaggle.
          Active participant in Hacktoberfest and GSoC.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <ul className="mt-2">
          <li>Email: [Your Email]</li>
          <li>LinkedIn: [LinkedIn URL]</li>
          <li>GitHub: [GitHub URL]</li>
          <li>Portfolio: yourwebsite.com</li>
        </ul>
      </section>

      <footer className="text-center pt-6">
        <a href="/resume.pdf" className="text-blue-600 underline">Download Resume</a>
      </footer>
    </div>
  );
}
