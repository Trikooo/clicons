import React from 'react';
import config from '../config';

interface UvIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UvIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/uv)
 * @see {@link https://clicons.dev/icon/uv}
 */
const UvIcon = React.forwardRef<SVGSVGElement, UvIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.0398 10.3679C17.9251 9.7936 17.7602 9.33788 18.1319 8.17618C18.3274 7.56515 18.9174 6.39175 18.4745 5.76736C17.8935 4.94821 16.5388 5.63909 15.8237 5.86792C14.6294 6.25004 14.1906 6.04435 13.6319 4.96008C13.3117 4.33848 12.8801 3.00008 11.9998 3.00008C11.1194 3.00008 10.6878 4.33848 10.3676 4.96008C9.80895 6.04435 9.37015 6.25004 8.17585 5.86792C7.46067 5.63909 6.10601 4.94821 5.52499 5.76736C5.08211 6.39175 5.67208 7.56515 5.86759 8.17618C6.23928 9.33788 6.07445 9.7936 4.95975 10.3679C4.33819 10.6881 2.99986 11.1197 2.99976 12C2.99965 12.8804 4.33812 13.312 4.95975 13.6323C6.07445 14.2066 6.23928 14.6623 5.86759 15.824C5.65428 16.4906 5.0124 17.7434 5.63737 18.3656C6.26014 18.9857 7.51055 18.3451 8.17585 18.1322C9.37015 17.7501 9.80895 17.9558 10.3676 19.0401C10.6878 19.6617 11.1194 21.0001 11.9998 21.0001C12.8801 21.0001 13.3117 19.6617 13.6319 19.0401C14.1906 17.9558 14.6294 17.7501 15.8237 18.1322C16.489 18.3451 17.7394 18.9857 18.3621 18.3656C18.9871 17.7434 18.3452 16.4906 18.1319 15.824C17.7602 14.6623 17.9251 14.2066 19.0398 13.6323C19.6614 13.312 20.9999 12.8804 20.9998 12C20.9997 11.1197 19.6613 10.6881 19.0398 10.3679Z'
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

UvIcon.displayName = 'UvIcon';
export default UvIcon;
