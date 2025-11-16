import React from 'react';
import config from '../config';

interface TextClearIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextClearIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-clear)
 * @see {@link https://clicons.dev/icon/text-clear}
 */
const TextClearIcon = React.forwardRef<SVGSVGElement, TextClearIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 20.001H5'
    }
  ],
  [
    'path',
    {
      d: 'M12 4L8 20.0008M12 4C13.3874 4 15.1695 4.03054 16.5884 4.17648C17.1885 4.23819 17.4886 4.26905 17.7541 4.37789C18.3066 4.60428 18.7518 5.10062 18.9194 5.6768C19 5.95381 19 6.26991 19 6.90214M12 4C10.6126 4 8.83047 4.03054 7.41161 4.17648C6.8115 4.23819 6.51144 4.26905 6.24586 4.37789C5.69344 4.60428 5.24816 5.10062 5.08057 5.6768C5 5.95381 5 6.26991 5 6.90214'
    }
  ],
  [
    'path',
    {
      d: 'M14 15L19 20M14 20L19 15'
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

TextClearIcon.displayName = 'TextClearIcon';
export default TextClearIcon;
