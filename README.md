# Test Insecure Connection with Broker

1. Clone the repo.
2. Install dependencies:

```bash
npm i
```
3. Start an unsecured Zeebe broker in one terminal:

```bash
npm run docker:start
```

4. Run the connection test in another terminal:

```bash 
npm run
```

To change the `zeebe-node` client version, install the version you want to test:

```bash
npm i zeebe-node@8.0.1
```