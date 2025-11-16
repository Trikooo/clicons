import React from 'react';
import config from '../config';

interface MessageEdit2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageEdit2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/message-edit2)
 * @see {@link https://clicons.dev/icon/message-edit2}
 */
const MessageEdit2Icon = React.forwardRef<SVGSVGElement, MessageEdit2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.9165 10.5001C21.9351 10.6557 21.9495 10.8127 21.9598 10.9708C22.0134 11.801 22.0134 12.6608 21.9598 13.491C21.6856 17.7333 18.3536 21.1126 14.1706 21.3906C12.7435 21.4855 11.2536 21.4853 9.82937 21.3906C9.33893 21.358 8.80437 21.241 8.34398 21.0514C7.83174 20.8404 7.57557 20.7349 7.44541 20.7509C7.31524 20.7669 7.12637 20.9062 6.74865 21.1847C6.08265 21.6758 5.24364 22.0286 3.9994 21.9983C3.37023 21.983 3.05565 21.9753 2.91481 21.7352C2.77398 21.4951 2.94938 21.1627 3.30018 20.4979C3.78671 19.5759 4.09498 18.5204 3.62788 17.6747C2.8234 16.4667 2.14007 15.0361 2.04021 13.491C1.98656 12.6608 1.98656 11.801 2.04021 10.9708C2.31438 6.7285 5.64636 3.34925 9.82937 3.07119C11.0318 2.99126 12.2812 2.97868 13.5 3.0338'
    }
  ],
  [
    'path',
    {
      d: 'M11.9955 12.5001H12.0044M7.99997 12.5001H8.00894'
    }
  ],
  [
    'path',
    {
      d: 'M20.8683 2.43946L21.5607 3.13183C22.1465 3.71761 22.1465 4.66736 21.5607 5.25315L17.9333 8.94881C17.6479 9.23416 17.2829 9.42652 16.8863 9.50061L14.6381 9.98865C14.2832 10.0657 13.9671 9.75054 14.0431 9.39537L14.5216 7.16005C14.5957 6.76336 14.7881 6.39836 15.0734 6.11301L18.747 2.43946C19.3328 1.85368 20.2825 1.85368 20.8683 2.43946Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

MessageEdit2Icon.displayName = 'MessageEdit2Icon';
export default MessageEdit2Icon;
