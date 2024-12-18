from datasets import load_dataset
import pandas as pd

def save_dataset_to_csv(limit=2000):
    # 데이터셋 로드
    dataset = load_dataset("Marqo/amazon-products-eval")

    # 데이터셋 분할별 CSV 저장
    for split in dataset.keys():  # 'train', 'test' 등
        limited_data = dataset[split].select(range(min(limit, len(dataset[split]))))
        df = pd.DataFrame(limited_data)
        output_file = f"amazon_products_{split}_{limit}.csv"
        df.to_csv(output_file, index=False)
        print(f"CSV 파일 저장 완료: {output_file}")

if __name__ == "__main__":
    save_dataset_to_csv(limit=10)