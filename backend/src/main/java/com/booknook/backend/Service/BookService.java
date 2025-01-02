package com.booknook.backend.Service;

import com.booknook.backend.Dto.Book;
import com.booknook.backend.Dto.GoogleBooksResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.apache.logging.log4j.message.MapMessage.MapFormat.JSON;

@Service
public class BookService {

    @Value("${google.books.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    ObjectMapper objectMapper = new ObjectMapper();

    public List<Book> getPopularBooks() {
        String url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=4&key=" + apiKey;

        ResponseEntity<GoogleBooksResponse> response = restTemplate.getForEntity(url, GoogleBooksResponse.class);
        GoogleBooksResponse booksResponse = response.getBody();

        String jsonresponse = restTemplate.getForObject(url, String.class);
        System.out.println(jsonresponse);

        List<Book> books = new ArrayList<>();
        if (booksResponse != null && booksResponse.getItems() != null) {
            for (GoogleBooksResponse.Item item : booksResponse.getItems()) {
                GoogleBooksResponse.VolumeInfo volumeInfo = item.getVolumeInfo();

                System.out.println(volumeInfo.getAverageRating());
                Book book = new Book();
                book.setId(item.getId());
                book.setTitle(volumeInfo.getTitle());
                book.setAuthors(volumeInfo.getAuthors());

                GoogleBooksResponse.ImageLinks googleImageLinks = volumeInfo.getImageLinks();
                Book.ImageLinks bookImageLinks = new Book.ImageLinks();
                bookImageLinks.setThumbnail(googleImageLinks.getThumbnail());
                book.setImageLinks(bookImageLinks);


                book.setAverageRating(volumeInfo.getAverageRating());
                books.add(book);
            }
        }

        return books;
    }
}