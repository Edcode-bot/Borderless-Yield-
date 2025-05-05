const express = require('express');
const path = require('path');
const app = express();

// Setup EJS and static folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Temporary in-memory storage
const loanApplications = [];
const investments = [];

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/investor', (req, res) => res.render('investor'));
app.get('/borrower', (req, res) => res.render('borrower'));

// Loan POST
app.post('/apply-loan', (req, res) => {
  const { name, country, stablecoin, amount, reason } = req.body;
  const newApplication = {
    name, country, stablecoin, amount, reason, date: new Date().toISOString()
  };
  loanApplications.push(newApplication);
  res.send(`
    <div style="padding: 2rem; font-family: sans-serif; text-align: center;">
      <h2 style="color: green;">Application Received</h2>
      <p>Thank you, ${name}. Your loan request for $${amount} (${stablecoin}) is under review.</p>
      <a href="/borrower" style="display: inline-block; margin-top: 1rem; color: blue;">Back to Dashboard</a>
    </div>
  `);
});

// Investment POST
app.post('/invest', (req, res) => {
  const { projectId, projectName, stablecoin, amount } = req.body;
  investments.push({
    projectId,
    projectName,
    stablecoin,
    amount,
    date: new Date().toISOString()
  });

  console.log('New Investment:', { projectName, amount, stablecoin });

  res.send(`
    <div style="padding: 2rem; font-family: sans-serif; text-align: center;">
      <h2 style="color: green;">Investment Successful</h2>
      <p>You have invested $${amount} in ${projectName} using ${stablecoin}.</p>
      <a href="/investor" style="display: inline-block; margin-top: 1rem; color: blue;">Back to Opportunities</a>
    </div>
  `);
});

// Admin loan view
app.get('/admin/loans', (req, res) => {
  res.render('loan-list', { applications: loanApplications });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Borderless Yield running on port ${PORT}`);
});
