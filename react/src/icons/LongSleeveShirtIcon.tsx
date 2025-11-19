import React from 'react';
import config from '../config';

interface LongSleeveShirtIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LongSleeveShirtIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/long-sleeve-shirt)
 * @see {@link https://clicons.dev/icon/long-sleeve-shirt}
 */
const LongSleeveShirtIcon = React.forwardRef<SVGSVGElement, LongSleeveShirtIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.5 7C5.82861 7.98583 6.21894 8.98374 6.3592 10.0191C6.45996 10.7628 6.42039 11.5168 6.34125 13.0248L6 19.5267C6 20.2323 6.11985 20.6092 6.75491 20.9496C9.3676 22.3501 14.6324 22.3501 17.2451 20.9496C17.8802 20.6092 18 20.2323 18 19.5267L17.6588 13.0248C17.5796 11.5168 17.54 10.7628 17.6408 10.0191C17.7811 8.98374 18.1714 7.98583 18.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M5.97108 18.5133C5.5045 18.7457 5.03918 19.0498 4.49657 18.9919C3.58003 18.8942 3.36671 18.4513 3.18021 17.343L2.09958 10.9212C1.95508 10.0625 1.9554 10.0558 2.18333 9.21526L2.72102 7.23229C3.085 5.88992 3.267 5.21874 3.70337 4.70677C4.13974 4.1948 4.77503 3.9071 6.04562 3.33172L8.59018 2.17941C8.98484 2.00069 8.98802 2 9.42155 2H14.5785C15.012 2 15.0152 2.00069 15.4098 2.17941L17.9544 3.33172C19.225 3.9071 19.8603 4.1948 20.2966 4.70677C20.733 5.21874 20.915 5.88992 21.279 7.23229L21.8167 9.21526C22.0446 10.0558 22.0449 10.0625 21.9004 10.9212L20.8198 17.343C20.633 18.4533 20.4186 18.8949 19.5002 18.9921C18.9331 19.0521 18.519 18.759 18.0257 18.5133'
    }
  ],
  [
    'path',
    {
      d: 'M9 2.5C9 2.5 9.90752 4.41477 10.6606 4.81358C11.0467 5.01803 11.53 4.99957 12 4.99957C12.47 4.99957 12.9533 5.01803 13.3394 4.81358C14.0925 4.41477 15 2.5 15 2.5'
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

LongSleeveShirtIcon.displayName = 'LongSleeveShirtIcon';
export default LongSleeveShirtIcon;
