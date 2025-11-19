import React from 'react';
import config from '../config';

interface ElearningExchangeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ElearningExchangeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/elearning-exchange)
 * @see {@link https://clicons.dev/icon/elearning-exchange}
 */
const ElearningExchangeIcon = React.forwardRef<SVGSVGElement, ElearningExchangeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.45898 9C3.7364 4.94289 7.53608 2 12.0248 2C17.223 2 21.4971 5.94668 22 11L20 10.5929'
    }
  ],
  [
    'path',
    {
      d: 'M21.541 15C20.2636 19.0571 16.4639 22 11.9752 22C6.77707 22 2.50297 18.0533 2 13L4.00005 13.4071'
    }
  ],
  [
    'path',
    {
      d: 'M9.00198 13.5279V15.5197C9.00198 15.8464 9.15779 16.1573 9.43401 16.3301C10.2776 16.8578 10.9193 17.0125 12.0054 17.046C13.0061 17.0729 13.6336 16.9156 14.5679 16.3316C14.8481 16.1564 15.0089 15.8427 15.0089 15.5113V13.5279M17.0112 11.0149V14.0304M7.04924 10.8436C7.41086 10.0796 9.65363 8.74957 11.7009 8.09253C11.8984 8.02914 12.1106 8.03542 12.3053 8.10674C14.1154 8.76943 16.1288 9.77168 16.8597 10.5853C17.2414 11.01 16.8682 11.552 16.4068 11.8874C15.4704 12.5682 14.4364 13.0978 12.3491 13.8996C12.1282 13.9844 11.8828 13.9873 11.6608 13.9049C9.52012 13.1101 7.51902 12.0842 7.06587 11.1817C7.01245 11.0752 6.9983 10.9512 7.04924 10.8436Z'
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

ElearningExchangeIcon.displayName = 'ElearningExchangeIcon';
export default ElearningExchangeIcon;
