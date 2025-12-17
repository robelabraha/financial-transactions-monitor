package com.finance.monitor;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @GetMapping
    public List<String> getTransactions() {
        return List.of("TXN-1001: $500", "TXN-1002: $1200");
    }

    @GetMapping("/{id}")
    public String getTransactionById(@PathVariable int id) {
        return "Transaction #" + id;
    }

    @PostMapping
    public String createTransaction(@RequestBody String txn) {
        return "Created transaction: " + txn;
    }
}
