package com.booknook.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.booknook.backend.Service.BookService;
import com.booknook.backend.Dto.Book;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/popular")
    public ResponseEntity<List<Book>> getPopularBooks() {
        return ResponseEntity.ok(bookService.getPopularBooks());
    }
}
