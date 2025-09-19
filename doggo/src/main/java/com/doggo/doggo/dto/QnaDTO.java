package com.doggo.doggo.dto;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class QnaDTO {

    private Long id; // DB에서 자동 생성된 ID

    private String memo;


}
